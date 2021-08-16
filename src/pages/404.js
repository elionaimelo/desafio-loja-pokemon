export default function Custom404() {
  return null;
}

export function getStaticProps() {
  return {
    redirect: {
      permanent: true,
      destination: '/',
    },
    fallback: false,
  };
}
