require "minitest/autorun"
require "pathname"
require "uri"

class SiteTest < Minitest::Test
  SITE_ROOT = Pathname("public").expand_path
  SITE_URL = URI("https://docs.ecosyste.ms/")
  LINK_PATTERN = /(?:href|src)=(?:"([^"]+)"|'([^']+)'|([^\s>]+))/

  def test_internal_links_resolve
    assert_predicate SITE_ROOT, :directory?, "Run `hugo --minify` before the tests"

    broken_links = html_files.each_with_object([]) do |file, broken|
      page_url = URI.join(SITE_URL.to_s, page_path(file))

      links(file).each do |link|
        target = internal_target(page_url, link)
        next unless target
        next if target_exists?(target.path)

        source = file.relative_path_from(SITE_ROOT)
        broken << "#{source}: #{link} -> #{target.path}"
      end
    end

    assert_empty broken_links, "Broken internal links:\n#{broken_links.join("\n")}"
  end

  def html_files
    SITE_ROOT.glob("**/*.html")
  end

  def page_path(file)
    path = "/#{file.relative_path_from(SITE_ROOT)}"
    path.sub(/index\.html\z/, "")
  end

  def links(file)
    file.read.scan(LINK_PATTERN).map { |matches| matches.compact.first }
  end

  def internal_target(page_url, link)
    return if link.empty? || link.start_with?("#")

    target = URI.join(page_url.to_s, link)
    return unless ["http", "https"].include?(target.scheme)
    return unless target.host == SITE_URL.host

    target
  rescue URI::InvalidURIError
    nil
  end

  def target_exists?(path)
    relative_path = URI::DEFAULT_PARSER.unescape(path).delete_prefix("/")
    target = SITE_ROOT.join(relative_path)
    target.file? || target.join("index.html").file?
  end
end
