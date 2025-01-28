import CategoryCard from "@/components/CategoryCard";
import TrendsHeading from "@/components/TrendsHeading";
import { Stack, VStack, Text } from "@chakra-ui/react";
// import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const listOfCategories = [
  {
    name: "Fashion",
    img: "/assets/fashionimage.svg",
    bgcolor: "rgba(255, 214, 179, 1)",
  },
  {
    name: "Beauty",
    img: "/assets/musicimage.svg",
    bgcolor: "rgba(231, 243, 239, 1)",
  },
  {
    name: "Home",
    img: "/assets/beautyimage.svg",
    bgcolor: "rgba(255, 230, 230, 1)",
  },
  {
    name: "Kitchen",
    img: "/assets/fashionimage.svg",
    bgcolor: "rgba(199, 206, 255, 1)",
  },
  {
    name: "Lifestyle",
    img: "/assets/fashionimage.svg",
    bgcolor: "rgba(255, 214, 179, 1)",
  },
  {
    name: "Pets",
    img: "/assets/musicimage.svg",
    bgcolor: "rgba(231, 243, 239, 1)",
  },
  {
    name: "Parenting",
    img: "/assets/beautyimage.svg",
    bgcolor: "rgba(255, 230, 230, 1)",
  },
  {
    name: "Fitness",
    img: "/assets/fashionimage.svg",
    bgcolor: "rgba(199, 206, 255, 1)",
  },
];

function Home() {
  const navigate = useNavigate();

  const handleSelectedCategory = (category) => {
    navigate(`/trends/${category}`);
  };

  return (
    <Stack>
      <TrendsHeading />
      <VStack padding={"24px"} gap={"20px"}>
        <VStack gap={"8px"} alignItems={"flex-start"}>
          <Text fontSize={"20px"} fontWeight={"700"} color={"rgba(0, 0, 0, 1)"}>
            Explore Categories
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            color={"rgba(0, 0, 0, 0.8)"}
          >
            Discover, Analyze, and Create with Data-Driven Insights.
          </Text>
        </VStack>
        <VStack w={"100%"} gap={"20px"}>
          {listOfCategories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              img={category.img}
              bgcolor={category.bgcolor}
              onClick={handleSelectedCategory}
            />
          ))}
        </VStack>
      </VStack>
    </Stack>
  );
}

export default Home;
