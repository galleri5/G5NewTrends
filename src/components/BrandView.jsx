import { HStack, Image, Stack, Text } from "@chakra-ui/react";
// const listOfBrandsView = [
//     {
//         img: "/assets/brand1image.svg",
//         title: "Brand 1",
//     },
//     {
//         img: "/assets/pepsiimage.svg",
//         title: "Brand 2",
//     },
//     {
//         img: "/assets/pgimage.svg",
//         title: "Brand 3",
//     },
//     {
//         img: "/assets/macimage.svg",
//         title: "Brand 4",
//     },
//     {
//         img: "/assets/macimage.svg",
//         title: "Brand 4",
//     },
//     {
//         img: "/assets/macimage.svg",
//         title: "Brand 4",
//     },

// ]

function BrandView({ data }) {
  return (
    <Stack>
      <Text fontWeight={"700"} fontSize={"16px"} color={"rgba(0, 0, 0, 1)"}>
        Brand View
      </Text>
      <HStack overflowX={"auto"} w={"100%"}>
        {data.map((item, index) => {
          if (item?.name !== "null" && item?.name !== "None")
            return (
              <Stack
                key={index}
                alignItems={"center"}
                border={"1px solid black"}
                gap={"12px"}
                borderRadius={"8px"}
                padding={"12px"}
                minW={"77px"}
              >
                {/* <Image w={"32px"} h={"32px"} src={item.img} alt="brand" /> */}

                <Text
                  color={"rgba(0, 0, 0, 1)"}
                  fontWeight={"600"}
                  fontSize={"12px"}
                >
                  {item?.name}
                </Text>
              </Stack>
            );
          return <></>;
        })}
      </HStack>
    </Stack>
  );
}

export default BrandView;
