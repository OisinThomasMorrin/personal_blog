import siteMetadata from "@/utils/siteMetaData";
import contentJson from "@/app/favourite/content/content.json";
export async function generateMetadata({ params }) {
  return {
    title: "Favorite Content",
    description: "Favorite Content",
    openGraph: {
      title: "Favorite Content",
      description: "Favourite content",
      url: siteMetadata.siteUrl + "/favorite/content",
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      authors: [siteMetadata.author],
      images: siteMetadata.siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: "Favorite Content",
      description: "Favourite content",
      images: siteMetadata.siteUrl,
    },
  };
}

export default function ContentPage({ params }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Favorite Content",
    description: "Favorite Content",
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: [
      {
        "@type": "Person",
        name: siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mb-10">
        <div className="mb-8 text-center relative w-full h-fit bg-dark pt-20 pb-20">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="inline-block font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
              Favourite Content
            </h1>
          </div>
        </div>
        <div className="mx-auto mt-2 max-w-[100ch] px-5 leading-relaxed text-lg text-left">
          {contentJson.length >= 1 &&
          //sort contentjson by type
            contentJson.sort((a, b) => a.type.localeCompare(b.type)).map((content) => (
              // display as content title, then description (there is a link around the title and it is bold and italics)
              <div key={content.title} className="grid grid-cols-1 gap-4 mt-4">
                <div className="text-2xl font-bold italic flex justify-between text-left">
                  <a href={content.url}>{content.title}</a>
                  <div>{`<${content.type}>`}</div>
                </div>
                <div className="mb-4">{content.description}</div>
                <hr />
              </div>
            ))}
        </div>
      </article>
    </>
  );
}
