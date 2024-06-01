import React from "react";
import Image from "next/image";
import { ProjectsStyles } from "@/components/projecs/styles";
import { CommonStyles } from "@/styles/common";
import { config, projectCategoryfonts } from "@/config";

function Projects() {
  return (
    <ProjectsStyles.ProjectsContainer>
      <ProjectsStyles.ProjectsHeadingContainer>
        <CommonStyles.ContainerHeading>PROJECTS</CommonStyles.ContainerHeading>
        <CommonStyles.ContainerHeadingSM>click to explore</CommonStyles.ContainerHeadingSM>
      </ProjectsStyles.ProjectsHeadingContainer>

      <ProjectsStyles.ProjectsContentContainer>
        {config.projects.map((item, index) => (
          <ProjectsStyles.Project key={index}>
            <Image
              src={item.image}
              width={600}
              height={350}
              alt="about me"
              objectFit="contain"
              style={{ borderRadius: "1rem" }}
            />
            <CommonStyles.RowCenter>
              <CommonStyles.ContainerHeadingMD>{item.name}</CommonStyles.ContainerHeadingMD>
              <CommonStyles.Text fonts={projectCategoryfonts}>|</CommonStyles.Text>
              <CommonStyles.Text fonts={projectCategoryfonts}>{item.category}</CommonStyles.Text>
            </CommonStyles.RowCenter>
            <CommonStyles.RowCenter>
              {item.highlights.map((highlight, index) => (
                <CommonStyles.Button key={index}>{highlight}</CommonStyles.Button>
              ))}
            </CommonStyles.RowCenter>
            <ProjectsStyles.ProjectDescription>{item.description}</ProjectsStyles.ProjectDescription>
          </ProjectsStyles.Project>
        ))}
      </ProjectsStyles.ProjectsContentContainer>
    </ProjectsStyles.ProjectsContainer>
  );
}

export default Projects;
