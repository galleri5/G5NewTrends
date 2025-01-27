// import InterestGraph from "@/components/InterestGraph";
import { HStack, Stack, VStack, Image, Text, Skeleton } from "@chakra-ui/react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
// import AboutTrend from "@/components/AboutTrend";
import LocationDemographics from "@/components/LocationDemographics";
import BrandView from "@/components/BrandView";
import ContentInspiration from "@/components/ContentInspiration";
import { useEffect } from "react";
import {
  FashionDetails,
  BeautyDetails,
  HomeDetails,
} from "../../public/constants";

function TrendsAnalysis() {
  const { trend } = useParams();
  const navigate = useNavigate();
  //   const [selectedGraphDates, setSelectedGraphDates] = useState("All");
  const location = useLocation();
  const [selectedContent, setSelectedContent] = useState("All");
  const [selectPostsFilter, setSelectPostsFilter] = useState("Recent Posts");
  const [fetchedData, setFetchedData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const subCategory = queryParams.get("subCategory");
  const trendType = queryParams.get("trendType");
  const selectedTrend = queryParams.get("selectedTrend");
  const shortCode = queryParams.get("shortCode");
  console.log(
    trend,
    category,
    subCategory,
    trendType,
    selectedTrend,
    shortCode
  );

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = () => {
    switch (category) {
      case "Fashion":
        return setData(
          FashionDetails[selectedTrend][subCategory][trendType][trend]
        );
      case "Beauty":
        return setData(
          BeautyDetails[selectedTrend][subCategory][trendType][trend]
        );
      case "Home":
        return setData(
          HomeDetails[selectedTrend][subCategory][trendType][trend]
        );

      default:
        return setData(
          FashionDetails[selectedTrend][subCategory][trendType][trend]
        );
    }
  };

  console.log(data);

  useEffect(() => {
    fetchPostData(shortCode);
  }, [shortCode]);

  const fetchPostData = (shortCode) => {
    if (!shortCode || shortCode == "") return;
    setIsLoading(true);
    fetch(
      `https://api.galleri5.co.in/brandsprod/brands/instagram-thumbnail/${shortCode}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkyODg2OGRjNDRlYTZhOThjODhiMzkzZDM2NDQ1MTM2NWViYjMwZDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYW5hY3Jvbi0zMzQ2MTEiLCJhdWQiOiJhbmFjcm9uLTMzNDYxMSIsImF1dGhfdGltZSI6MTcyOTc0MzEyOCwidXNlcl9pZCI6IllpUUIwdnhKYnZhRmgwelQyNUFIY1JhMkV2aDIiLCJzdWIiOiJZaVFCMHZ4SmJ2YUZoMHpUMjVBSGNSYTJFdmgyIiwiaWF0IjoxNzMyNTYwOTI1LCJleHAiOjE3MzI1NjQ1MjUsImVtYWlsIjoibWFuamlyYS5iYXN1QHJpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuamlyYS5iYXN1QHJpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.lGzRBQAVV-2YTkuTIeHOZskyMUyG8iNNgt3flSjgu-dwh5tnvbcoO_V-XNxCh1m8CFEgXtz9-kAVyVY_6od7gf9DHh9ezuDnW_8BfvSt7COptcJtWkQ5Hhryq91Z3i4YB5AyC4lmVuP-TUZX5XrYNH5uFcLO-FseQERGVsGl_LN3FcsoRdFDOszBd5apomSnbsPJO17xZU6OemoMcRKa0USzG5AYlDed0H9VUJc3UErLdP-eosZhr87w3m69iCLDs_GuhkXLTRUYnniWBCIuzl4F9cfH0PzUVnAYeYbxd_YSUjEmKDj0CLoBbIjJLY2ZFk2nYEataVoelW6W0LYDMA",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFetchedData(data?.thumbnail || "");
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  };

  //   const handleSelectGraphDates = (graphDates) => {
  //     setSelectedGraphDates(graphDates);
  //   };

  const handleSelectContent = (content) => {
    setSelectedContent(content);
  };

  const handleSelectImpressions = (postsType) => {
    setSelectPostsFilter(postsType);
  };

  if (data)
    return (
      <Stack>
        <VStack
          alignItems={"flex-start"}
          padding={"24px 20px"}
          background={"rgba(254, 243, 113, 1)"}
        >
          <Image
            onClick={() => navigate(-1)}
            w={"24px"}
            h={"24px"}
            src="/assets/leftarrowicon.svg"
            alt="trend"
          />
          <HStack>
            <Skeleton loading={isLoading} w={"66px"} h={"72px"}>
              {!isLoading && (
                <Image
                  w={"66px"}
                  h={"72px"}
                  border={"1px solid rgba(0, 0, 0, 1)"}
                  src={fetchedData}
                  alt="trend"
                />
              )}
            </Skeleton>
            <VStack>
              <Text
                fontWeight={"700"}
                fontSize={"20px"}
                color={"rgba(0, 0, 0, 1)"}
              >
                {trend}
              </Text>
              <HStack>
                <Image
                  src={
                    trendType == "emerging" || trendType == "popular"
                      ? "/assets/uparrowicon.svg"
                      : "/assets/downarrowicon.svg"
                  }
                  alt="Up Arrow"
                  w="10px"
                  h="10px"
                />{" "}
                <Text
                  color={
                    trendType == "emerging" || trendType == "popular"
                      ? "rgba(99, 220, 161, 1)"
                      : "rgba(237, 129, 106, 1)"
                  }
                  fontWeight={"500"}
                  fontSize={"14px"}
                >
                  {data?.percentage}%
                </Text>
                {/* <Text
                color={"rgba(0, 0, 0, 1)"}
                fontWeight={"500"}
                fontSize={"14px"}
              >
                Today
              </Text> */}
              </HStack>
            </VStack>
          </HStack>
        </VStack>
        <Stack padding={"20px"} gap={"40px"} flexDirection={"column"}>
          {/* <VStack alignItems={"flex-start"} width={"100%"} gap={"20px"}>
            <Text
              color={"rgba(0, 0, 0, 1)"}
              fontWeight={"700"}
              fontSize={"16px"}
            >
              Overall Analysis
            </Text>
            <VStack
              border={"1px solid rgba(0, 0, 0, 1)"}
              padding={"16px"}
              borderRadius={"8px"}
              w={"100%"}
              alignItems={"flex-start"}
            >
              <Text>
                <span
                  style={{
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  {trend}
                </span>{" "}
                <span
                  style={{
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  is a
                </span>
                <span
                  style={{
                    color: "rgba(255, 0, 0, 1)",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  Declining Trend
                </span>
              </Text>
              <Text
                color={"rgba(0, 0, 0, 1)"}
                fontWeight={"500"}
                fontSize={"12px"}
              >
                Expected to be declining in 3 days from today
              </Text>
              <Text
                color={"rgba(0, 0, 0, 1)"}
                fontWeight={"500"}
                fontSize={"12px"}
              >
                Score{" "}
                <span
                  style={{
                    color: "rgba(255, 0, 0, 1)",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  2.29
                </span>
              </Text>
            </VStack>
          </VStack> */}
          {/* <InterestGraph
          onSelectGraphDates={handleSelectGraphDates}
          selectedGraphDates={selectedGraphDates}
        /> */}
          {/* <AboutTrend /> */}
          <LocationDemographics data={data?.details?.locationDemographics} />
          <BrandView data={data?.details?.brandView} />
          <ContentInspiration
            data={data?.details?.contentGallery}
            onSelectContent={handleSelectContent}
            selectedContent={selectedContent}
            showContentGallery={true}
            onSelectPostsFilter={handleSelectImpressions}
            selectPostsFilter={selectPostsFilter}
          />
        </Stack>
      </Stack>
    );

  return <></>;
}

export default TrendsAnalysis;
