const {about,link} = {
  about: 'text-center mt-4 bg-white md:bg-[#e5e7eb] font-nw-thin text-xs p-8 ',
  link: 'font-bold hover:opacity-50 transition-all'
}
const About = () => {
  return (
    <p className={about}>
      This is an ongoing diary comics project by me (Xinrui) ! Find me here ->   <a className={link} href='http://instagram.com/xynree'>insta</a>   <a className={link} href='http://github.com/xynree'>github</a>   <a className={link} href='mailto:xynree@gmail.com'>email </a>
    </p>
  );
}

export default About;