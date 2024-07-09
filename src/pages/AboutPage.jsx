import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <main className="flex-grow container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 ">
            About Us
          </h1>

          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="max-w-lg">
              <img
                src="/about-img.jpg"
                alt="About Us"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>

            <div className="flex-1">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                gravida nisl at ligula posuere, at laoreet est fringilla. Sed
                scelerisque rutrum orci, nec suscipit orci fringilla vel. Fusce
                nec convallis odio. Nam sollicitudin venenatis aliquam. Morbi ut
                turpis condimentum, dictum felis ac, tempus mauris. Fusce
                ullamcorper consequat felis sit amet tincidunt. Nunc nec lectus
                sit amet purus fermentum vehicula. Nullam viverra est nec ex
                vestibulum, nec auctor nisi suscipit.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida nisl at ligula posuere, at laoreet est fringilla. Sed
              scelerisque rutrum orci, nec suscipit orci fringilla vel. Fusce
              nec convallis odio. Nam sollicitudin venenatis aliquam.
            </p>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida nisl at ligula posuere, at laoreet est fringilla. Sed
              scelerisque rutrum orci, nec suscipit orci fringilla vel. Fusce
              nec convallis odio. Nam sollicitudin venenatis aliquam.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
