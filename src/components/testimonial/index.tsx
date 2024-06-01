import React from "react";
import Image from "next/image";
import { TestimonialStyles } from "@/components/testimonial/styles";
import { CommonStyles } from "@/styles/common";
import { config, fonts, projectCategoryfonts } from "@/config";

function Testimonial() {
  return (
    <TestimonialStyles.TestimonialContainer data-aos="zoom-in-up" id="testimonial">
      <TestimonialStyles.TestimonialHeadingContainer>
        <CommonStyles.ContainerHeading>Testimonial</CommonStyles.ContainerHeading>
      </TestimonialStyles.TestimonialHeadingContainer>

      <TestimonialStyles.TestimonialContentContainer>
        {config.testimonials.map((item, index) => (
          <TestimonialStyles.Testimonial key={index} data-aos="fade-left">
            <Image
              src={item.image}
              width={200}
              height={200}
              alt="about me"
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
            <CommonStyles.ColumnStart>
              <CommonStyles.Row>
                <CommonStyles.ContainerHeadingMD>{item.name}</CommonStyles.ContainerHeadingMD>
                <CommonStyles.Text fonts={fonts}>|</CommonStyles.Text>
                <CommonStyles.Text fonts={fonts}>{item.position}</CommonStyles.Text>
              </CommonStyles.Row>
              <CommonStyles.Text fonts={fonts}>{item.date}</CommonStyles.Text>
              <TestimonialStyles.TestimonialDescription>
                {item.review}
              </TestimonialStyles.TestimonialDescription>
              <CommonStyles.Row>
                {item.highlights.map((highlight, index) => (
                  <CommonStyles.Button key={index}>{highlight}</CommonStyles.Button>
                ))}
              </CommonStyles.Row>
            </CommonStyles.ColumnStart>
          </TestimonialStyles.Testimonial>
        ))}
      </TestimonialStyles.TestimonialContentContainer>
    </TestimonialStyles.TestimonialContainer>
  );
}

export default Testimonial;
