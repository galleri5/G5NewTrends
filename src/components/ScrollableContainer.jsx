import { HStack, VStack } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const ScrollableContainer = ({ children, gap = "16px" }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    checkScroll();
    // Add resize event listener to handle window resizing
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [children]);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = 150;
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const ScrollButton = ({ direction }) => (
    <VStack
      position="absolute"
      {...(direction === "left" ? { left: -3 } : { right: -3 })}
      border={"2px solid #ffffff7d"}
      borderRadius={"25%"}
      p="3px"
      zIndex={1}
      backdropFilter="blur(10px)"
      backgroundBlendMode="overlay"
      backgroundColor="#ffffff7d"
      onClick={() => scroll(direction)}
      cursor="pointer"
    >
      {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
    </VStack>
  );

  return (
    <HStack position="relative" width="100%">
      {canScrollLeft && <ScrollButton direction="left" />}
      <HStack
        ref={scrollRef}
        overflowX={"auto"}
        w="full"
        gap={gap}
        onScroll={checkScroll}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
        }}
      >
        {children}
      </HStack>
      {canScrollRight && <ScrollButton direction="right" />}
    </HStack>
  );
};

export default ScrollableContainer;
