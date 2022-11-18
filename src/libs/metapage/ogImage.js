export const generateOgImage = (payload) => {
  const logo = {
    light: './logo-light.svg',
    dark: './logo-dark.svg',
  }

  return (
    'https://og-image.vercel.app/' +
    '**' +
    (payload?.title ?? '') +
    '**' +
    '%3Cbr%2F%3E' +
    (payload?.subTitle ?? '') +
    '.png?theme=' +
    (payload.theme ?? 'dark') +
    '&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2F' +
    logo[payload.theme ?? 'dark']
  )
}
