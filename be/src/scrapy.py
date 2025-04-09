import scrapy

class HackerNewsSpider(scrapy.Spider):
    name = "hacker_news"
    start_urls = [
        "https://news.ycombinator.com/"
    ]
    
    def parse(self, response):
        for article in response.css("tr.athing"):
            # Extract title and URL from the correct selector
            title = article.css("span.titleline a::text").get()
            url = article.css("span.titleline a::attr(href)").get()
            
            # Extract votes from following sibling tr
            votes_text = article.xpath('following-sibling::tr[1]//span[@class="score"]/text()').get()
            votes = int(votes_text.split()[0]) if votes_text else 0
            
            yield {
                "title": title,
                "url": url,
                "votes": votes
            }
        
        # Handle pagination
        next_page = response.css("a.morelink::attr(href)").get()
        if next_page:
            yield response.follow(next_page, self.parse)