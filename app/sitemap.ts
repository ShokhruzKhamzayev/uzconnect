import { MetadataRoute } from "next";

const baseUrl = 'https://cards.vortexhub.uz'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${baseUrl}`,
            changeFrequency: 'never',
            priority: 1
        }
    ]
}