const FooterComponent = () => {
  return (
    <footer className=" p-10 bg-base-200 text-white  sm:px-4">
      <div className="max-w-6xl flex justify-between m-auto">
        <nav className="flex flex-col">
          <h6 className="text-white font-bold text-2xl mb-2">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-white font-bold text-2xl mb-2 ">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-white font-bold text-2xl mb-2">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-white font-bold text-2xl mb-2">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default FooterComponent;
