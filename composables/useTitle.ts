export const useTitle=(title:string)=>{
    useSeoMeta({
        title: `wow | ${title}`,
        ogTitle: title,
        description: 'nuxt ts is wow.',
        ogDescription: 'ini adalah site saia.',
        // ogImage: 'https://example.com/image.png',
        // twitterCard: 'summary_large_image',
    })
}