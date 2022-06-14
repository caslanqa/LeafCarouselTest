import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

export default function LeafCarousel() {
  return (
      <InfiniteCarousel
          breakpoints={[
              {
                  breakpoint: 200,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                  },
              },
              {
                  breakpoint: 500,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                  },
              },
              {
                  breakpoint: 700,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                  },
              },
          ]}
          autoCycle={true}
          lazyLoad={true}
          dots={true}
          showSides={true}
          sidesOpacity={0.3}
          sideSize={0.08}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
      >
          <div>
              <img
                  alt="Image1"
                  src="../images/1.png"
              />
              <p>Image1</p>
          </div>
          <div>
              <img
                  alt="Image2"
                  src="../images/2.png"
              />
              <p>Image2</p>
          </div>
          <div>
              <img
                  alt="Image3"
                  src="../images/3.png"
              />
              <p>Image3</p>
          </div>
          <div>
              <img
                  alt="Image4"
                  src="../images/4.png"
              />
              <p>Image4</p>
          </div>
          <div>
              <img
                  alt="Image5"
                  src="../images/5.png"
              />
              <p>Image5</p>
          </div>
          <div>
              <img
                  alt="Image6"
                  src="../images/6.png"
              />
              <p>Image6</p>
          </div>
          <div>
              <img
                  alt="Image7"
                  src="../images/7.png"
              />
              <p>Image7</p>
          </div>
          <div>
              <img
                  alt="Image8"
                  src="../images/8.png"
              />
              <p>Image8</p>
          </div>
          <div>
              <img
                  alt="Image9"
                  src="../images/9.png"
              />
              <p>Image9</p>
          </div>
          <div>
              <img
                  alt="Image10"
                  src="../images/10.png"
              />
              <p>Image10</p>
          </div>
          <div>
              <img
                  alt="Image11"
                  src="../images/11.png"
              />
              <p>Image11</p>
          </div>
          <div>
              <img
                  alt="Image12"
                  src="../images/12.png"
              />
              <p>Image12</p>
          </div>

      </InfiniteCarousel>
  );
}