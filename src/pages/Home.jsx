import React, { useState, useEffect } from "react"; // Import useState and useEffect
import axios from "axios";
import v1 from "../assets/2.jpg";
import video from "../assets/headervideo.mp4";
import he1 from "../assets/he1.webp";
import he2 from "../assets/he2.webp";
import banner from "../assets/accmannew2.jpeg";
import banner2 from "../assets/acman2.jpeg";
import logo from "../assets/acmanlogo.png"

import Slider from "react-slick";
function Home() {
  const [products, setProducts] = useState([]);
  const [categorizedProducts, setCategorizedProducts] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Fetch all products when the component mounts
    axios
      .get("https://tome2.onrender.com/api/v1/product/getall") // Adjust the URL to your actual endpoint
      .then((response) => {
        const fetchedProducts = response.data.products;

        // Categorize products
        const categorized = fetchedProducts.reduce((acc, product) => {
          const { category } = product;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(product);
          return acc;
        }, {});

        setProducts(fetchedProducts);
        setCategorizedProducts(categorized);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getProductsForCategory = () => {
    if (selectedCategory === "All") {
      return products;
    }
    return categorizedProducts[selectedCategory] || [];
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* Slider Section */}
      <Slider {...sliderSettings} className="h-300">
  {/* Banner Slide 1 */}
  <div className="relative h-[200px] lg:h-[500px] w-full overflow-hidden">
    <img
      src={banner}
      className="w-full opacity-70"  // Lowering brightness by applying opacity
      alt="Banner"
    />
    <div className="absolute inset-0 flex justify-center items-center text-white font-bold text-4xl">
      {/* Logo and text in the center */}
      <img src={logo} alt="Logo" className="h-16 mr-4" /> {/* Adjust size of the logo */}
      Discover Excellence in Education at ACCMAN Business School
    </div>
  </div>

  {/* Banner Slide 2 */}
  <div className="relative h-[200px] lg:h-[500px] w-full overflow-hidden">
    <img
      src={banner2}
      className="w-full opacity-70"  // Lowering brightness by applying opacity
      alt="Banner"
    />
    <div className="absolute inset-0 flex justify-center items-center text-white font-bold text-4xl">
      {/* Logo and text in the center */}
      <img src={logo} alt="Logo" className="h-16 mr-4" /> {/* Adjust size of the logo */}
      Discover Excellence in Education at ACCMAN Business School
    </div>
  </div>
</Slider>



      {/* About Section */}
      <div className="p-4 flex flex-col lg:flex-row gap-2 mt-64 lg:mt-40">
        {/* Left Side */}
        <div className="w-full lg:w-[50%] flex pl-4 lg:pl-12">
          <div className="mt-8">
            <h1 className="text-4xl lg:text-6xl font-semibold ml-2 mt-48 lg:mt-0">
              About Us
            </h1>
          <p className="mt-6 lg:mt-12">
            Welcome to <span className="font-bold">ACCMAN Business College</span> — a place where education meets excellence. We offer industry-focused programs that prepare students for a successful career in business and management. Our college provides an environment where innovation, leadership, and academic rigor come together to foster personal and professional growth.
          </p>
          <p className="mt-2">
            Our experienced faculty and state-of-the-art infrastructure ensure that students receive a comprehensive education. From MBA and BBA programs to an eco-friendly campus, ACCMAN Business College offers a holistic approach to learning. Join us to shape your future with knowledge, skills, and opportunities that will lead to success.
          </p>

            <a href="/about">
              <button className="border-2 bg-[#da9858] text-white border-[#da9858] px-4 py-2 rounded-full mt-6 lg:mt-8">
                Learn More
              </button>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[50%] flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[50%] pt-4">
            <img
              src="https://images.careerindia.com/webp/college-photos/18347/college-building1_1472195969.jpg"
              alt="About Image 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-[50%] pt-8 lg:pt-20">
            <img
              src="https://images.shiksha.com/mediadata/images/1508840634phpq9za1M.jpeg"
              alt="About Image 2"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* // Accman Business School Section */}
<div className="mt-40 mb-40 px-6">
  

  

  {/* Our Courses */}
<div className="mb-12">
  <h2 className="text-3xl font-semibold mb-6 text-center">Our Courses</h2>
  <div className="grid grid-cols-3 gap-6">
    {/* BBA Program */}
    <div className="col-span-1">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img
          src="https://images.pexels.com/photos/4145151/pexels-photo-4145151.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="BBA Program"
          className="w-full h-[30vh] object-cover mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">Bachelor of Business Administration</h3>
        <p className="text-base text-gray-700 mb-4">
          The Bachelor of Business Administration (BBA) program provides students with essential business knowledge, practical skills, and strategic insights, preparing them for successful careers in the corporate world.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>

    {/* MBA Program */}
    <div className="col-span-1">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxK03sqc4x2Q-LtWXNEAYhKzSYThcoWXA4w&s"
          alt="MBA Program"
          className="w-full h-[30vh] object-cover mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">Master of Business Administration</h3>
        <p className="text-base text-gray-700 mb-4">
          The Master of Business Administration (MBA) program offers in-depth business knowledge, leadership skills, and strategic insights, equipping students for successful careers in the dynamic corporate world.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>

    {/* BCA Program */}
    <div className="col-span-1">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img
          src="https://www.dialeducation.com/assets/images/gallery/gallery_17005500522.jpeg"
          alt="BCA Program"
          className="w-full h-[30vh] object-cover mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Applications</h3>
        <p className="text-base text-gray-700 mb-4">
          The Bachelor of Computer Applications (BCA) program equips students with comprehensive knowledge in computer systems, software applications, and information technology, preparing them for successful careers in the tech industry.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>
  </div>
</div>

   {/* Testimonials Carousel Section */}
<div className="mt-40 mb-40 px-6">
  <h2 className="text-4xl font-semibold mb-6 text-center">
    Discover why students and professionals praise their transformative experiences at ACCMAN Business School
  </h2>

  {/* Carousel Container */}
  <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-6 p-4">
    {/* Testimonial Card 1 */}
    <div className="carousel-item p-6 bg-blue-500 rounded-lg shadow-lg w-[350px]">
      <p className="text-lg text-white mb-4">
        "ACCMAN has an environment which greatly motivates the student toward success. It also provides an opportunity of gaining experience & knowledge, and winning friends for life when you mingle with students from all parts of the country."
      </p>
      {/* Name and Designation Below the Paragraph */}
      <div className="text-center mt-4">
        <div className="font-semibold text-xl text-white">Vishal Jaiswal</div>
        <p className="text-sm text-white">Senior Manager (MRF Limited)</p>
      </div>
    </div>

    {/* Testimonial Card 2 */}
    <div className="carousel-item p-6 bg-green-500 rounded-lg shadow-lg w-[350px]">
      <p className="text-lg text-white mb-4">
        "At ACCMAN, I learnt one very important lesson – it is not the grades that matter but the learning process. This has helped me in my career more than I had realized at that time. Nowadays, your knowledge and skills become redundant very quickly."
      </p>
      {/* Name and Designation Below the Paragraph */}
      <div className="text-center mt-4">
        <div className="font-semibold text-xl text-white">Ankit Tambar</div>
        <p className="text-sm text-white">Head Retail Promotions (VIVO INDIA)</p>
      </div>
    </div>

    {/* Testimonial Card 3 */}
    <div className="carousel-item p-6 bg-purple-500 rounded-lg shadow-lg w-[350px]">
      <p className="text-lg text-white mb-4">
        "ACCMAN has helped me to develop greater proficiency in public speaking, report preparation, presentations, strategic analysis, leadership, and project management. I was able to apply the skills and knowledge I developed in the program to my job."
      </p>
      {/* Name and Designation Below the Paragraph */}
      <div className="text-center mt-4">
        <div className="font-semibold text-xl text-white">Deepak Tewatia</div>
        <p className="text-sm text-white">Senior Brand Manager (LT FOODS LTD)</p>
      </div>
    </div>

    {/* Testimonial Card 4 */}
    <div className="carousel-item p-6 bg-orange-500 rounded-lg shadow-lg w-[350px]">
      <p className="text-lg text-white mb-4">
        "Accman provides me with everything that a management institute is supposed to give. Faculties, amenities, placements, atmosphere—everything is of top quality here at ACCMAN. It helped me in achieving my goal, and I got the platform I needed."
      </p>
      {/* Name and Designation Below the Paragraph */}
      <div className="text-center mt-4">
        <div className="font-semibold text-xl text-white">Anurag Pandey</div>
        <p className="text-sm text-white">Manager Scale - II (Central Bank Of India)</p>
      </div>
    </div>

    {/* Testimonial Card 5 */}
    <div className="carousel-item p-6 bg-red-500 rounded-lg shadow-lg w-[350px]">
      <p className="text-lg text-white mb-4">
        "ACCMAN has an environment which greatly motivates the student toward success. It also provides an opportunity of gaining experience & knowledge, and winning friends for life when you mingle with students from all parts of the country."
      </p>
      {/* Name and Designation Below the Paragraph */}
      <div className="text-center mt-4">
        <div className="font-semibold text-xl text-white">Vishal Jaiswal</div>
        <p className="text-sm text-white">Senior Manager (MRF Limited)</p>
      </div>
    </div>

    {/* Testimonial Card 6 */}
    <div className="carousel-item p-6 bg-yellow-500 rounded-lg shadow-lg w-[350px]">
      <p className="text-lg text-white mb-4">
        "At ACCMAN, I learnt one very important lesson – it is not the grades that matter but the learning process. This has helped me in my career more than I had realized at that time. Nowadays, your knowledge and skills become redundant very quickly."
      </p>
      {/* Name and Designation Below the Paragraph */}
      <div className="text-center mt-4">
        <div className="font-semibold text-xl text-white">Ankit Tambar</div>
        <p className="text-sm text-white">Head Retail Promotions (VIVO INDIA)</p>
      </div>
    </div>
  </div>
</div>



  {/* Call to Action */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-semibold mb-6">Join Us Today!</h2>
    <p className="text-lg mb-6">
      Ready to take your career to the next level? Apply now and become part of the Accman Business School community!
    </p>
    <a
      href="/apply"
      className="bg-yellow-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
    >
      Apply Now
    </a>
  </div>
</div>

    </>
  );
}

export default Home;
