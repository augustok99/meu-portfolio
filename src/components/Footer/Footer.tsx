const Footer = () => {
  return (
    <footer className="flex flex-col items-center font-roboto justify-center text-[0.9rem] gap-6">
      <a href="" className="text-muted-400 mb-6 no-underline hover:underline">
        Carlos Augusto © {new Date().getFullYear()} - Feito com carinho ❤️
      </a>
    </footer>
  );
};

export default Footer;
