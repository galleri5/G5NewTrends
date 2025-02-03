import React, { useState, useEffect } from "react";
import { Menu, TrendingUp, Contact, NotebookTabs } from "lucide-react";
import { createPortal } from "react-dom";
import "./Sidebar.css";

const Sidebar = ({ containerRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Content Trends");

  useEffect(() => {
    if (!containerRef?.current) return;

    if (isOpen) {
      const scrollY = containerRef.current.scrollTop;
      containerRef.current.style.overflow = "hidden";
      containerRef.current.style.top = `-${scrollY}px`;
    } else {
      const scrollY = containerRef.current.style.top;
      containerRef.current.style.overflow = "auto";
      containerRef.current.style.position = "relative";
      containerRef.current.style.top = "";
      containerRef.current.scrollTop = parseInt(scrollY || "0") * -1;
    }
  }, [isOpen, containerRef]);

  useEffect(() => {
    return () => {
      if (containerRef?.current) {
        containerRef.current.style.overflow = "auto";
        containerRef.current.style.position = "relative";
        containerRef.current.style.top = "";
      }
    };
  }, [containerRef]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleContentClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    {
      name: "Content Trends",
      icon: <NotebookTabs size={16} />,
      comingSoon: false,
      bg: "amber",
    },
    {
      name: "Topic Trends",
      icon: <TrendingUp size={16} />,
      comingSoon: true,
      bg: "transparent",
    },
    {
      name: "Product Trends",
      icon: <Contact size={16} />,
      comingSoon: true,
      bg: "transparent",
    },
  ];

  const MenuItem = ({ item }) => (
    <div
      className={`menu-item ${activeItem === item.name ? "active" : ""} ${
        item.comingSoon ? "coming-soon" : ""
      } ${item.bg === "amber" ? "amber-bg" : ""}`}
      onClick={() => {
        if (!item.comingSoon) setActiveItem(item.name);
      }}
    >
      <div className={`menu-icon ${activeItem === item.name ? "active" : ""}`}>
        {item.icon}
      </div>
      <span className={`menu-text ${activeItem === item.name ? "active" : ""}`}>
        {item.name}
      </span>
    </div>
  );

  const SidebarContent = () => (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="menu-trigger"
        aria-label="Open Menu"
      >
        <Menu size={24} />
      </button>

      <div
        className={`backdrop ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`drawer ${isOpen ? "active" : ""}`}
        onClick={handleContentClick}
      >
        <div className="drawer-content">
          <div className="drawer-header">
            <div className="header-text"></div>
          </div>

          <div className="drawer-body">
            <div className="category-section">
              <div className="category-header">CATEGORY</div>

              <div className="menu-list">
                {menuItems
                  .filter((item) => !item.comingSoon)
                  .map((item, index) => (
                    <MenuItem key={index} item={item} />
                  ))}
              </div>

              <div className="coming-soon-section">
                <div className="coming-soon-header">COMING SOON</div>
                {menuItems
                  .filter((item) => item.comingSoon)
                  .map((item, index) => (
                    <MenuItem key={index} item={item} />
                  ))}
              </div>
            </div>

            <div className="drawer-footer">
              <p className="last-updated">
                Last updated on Jan 28, 2025, 04:47 PM
              </p>

              <div className="powered-by">
                <span className="powered-by-text">Powered by</span>
                <div className="logo-container">
                  <img
                    src="./assets/galleri5logo.svg"
                    alt="galleri5logo"
                    className="logo"
                  />
                  <span className="brand-text">Trends</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="sidebar-wrapper">
      {containerRef?.current ? (
        createPortal(<SidebarContent />, containerRef.current)
      ) : (
        <SidebarContent />
      )}
    </div>
  );
};

export default Sidebar;
