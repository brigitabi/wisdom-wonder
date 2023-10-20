import React from 'react';

const About = () => {
  return (
    <div className=''>
      <div className="flex flex-row justify-around space-x-12 pt-12">
        <p className="text-4xl font-bold ml-4 underline hover:bg-green-600">
          About
        </p>
        <p className="text-2xl font-bold px-6">
          Wisdom wonder is on a mission to enhance the quality of life for
          seniors and pensioners through compassion connection and support.
        </p>
      </div>

      {/* images   */}
      <div className="m-4 pt-12">
        <div className="h-[450px] w-[450px] object-cover flex px-4 space-x-12 ">
          <img
            className="rounded-md hover:scale-105 duration-300"
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="team spirit"
          />
          <img
            className="rounded-md hover:scale-105 duration-300"
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="team-spirit"
          />
        </div>

        {/* our vision  */}
        <div className="bg-gray-100 py-12 px-4 md:px-8 ">
          <div className=''>
            <p className='mb-4'>
              Founded in 2023, Wisdom Wonder is a passionate endeavor dedicated
              to enhancing the golden years of life. We understand the inherent
              value and immense potential that elders carry within them, and we
              believe in cherishing and nurturing these treasures. Our mission
              is to empower senior citizens with the tools and opportunities to
              continue growing, learning, and thriving, regardless of age.
            </p>

            <p className='mb-4'>
              At Wisdom Wonder, we pride ourselves on providing a diverse range
              of activities that cater to the unique and evolving interests of
              our elder community. We offer a holistic approach to active aging,
              nurturing physical, mental, and social well-being. Our programs
              encompass a wide array of activities, from invigorating physical
              exercises that promote vitality and strength to enriching culinary
              experiences that tantalize the taste buds.
            </p>

            <p className=''>
              In the digital age, we recognize the importance of staying
              connected and proficient in technology. Wisdom Wonder offers
              computer courses designed to bridge the digital divide and make
              seniors feel confident in navigating the online world, connecting
              with loved ones, and accessing a wealth of information at their
              fingertips.
            </p>

            <p className='mb-4'>
              Our team of experienced and passionate instructors are dedicated
              to creating a warm and inclusive environment where wisdom meets
              wonder, where friendships are forged, and where skills are honed.
              We are committed to fostering a sense of belonging and purpose,
              ensuring that each individual's life remains vibrant and
              meaningful.
            </p>

            <p>
              Wisdom Wonder is more than a company; it's a community. <span className='font-bold text-black underline hover:scale-105 cursor-pointer'>Join us</span> on
              this remarkable journey to celebrate life's every chapter, and
              together, we'll create a future filled with wisdom and wonder.
              Your story continues, and so does your adventure with Wisdom
              Wonder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
