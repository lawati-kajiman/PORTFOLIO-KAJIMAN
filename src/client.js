import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:'xvqlqckk',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:'skYsFF7o1rlnkURTSjAwz5UIeks133okNLbPOpFpDwNfoKppppl65SNWvtY3fohdjr9ZA9UC9L7XJRVvm8oUslEYtucJmMRE7BX6KAqxlo0MImyrbBdAf8Is6cB4wTPgkIDXFGcpdB7xqcrGj0XDQswVAwI5KCABPONn5qMPS5PkYEPTfXzq',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);