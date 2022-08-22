import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
export const Seo = ({ title, tagline, children}) => {
  const { title: defaultTitle, tagline: defaultDescription} = useSiteMetadata()
  const seo = {
    title: title || defaultTitle,
    description: tagline || defaultDescription,
      }
  return (
    <>
      <title>{seo.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      {children}
    </>
  )
}