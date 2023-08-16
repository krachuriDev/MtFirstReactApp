import React from "react";
import ReactDOM from "react-dom/client";

/*
AppLayout
  Header
  -Logo
  -Navigation Items.
  Body
  -Search Component
  -Restro Component
    -Restro Card
      -Logo.
      -Name.
      -Cuisine.
      -Rating.
      -Delivery Time.
  -Pagination
  Footer
  CopyRight
  Various links like Socialmedia,Contact Us etc
*/

const restroList = [
  {
    info: {
      id: "615247",
      name: "Udipi's Upahar",
      cloudinaryImageId: "nhaugk99goo8e20od0pv",
      locality: "Lingampally & Nalagandla",
      areaName: "Lingampally",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Chinese", "Snacks"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "615247",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "1061",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-16 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0aebdd9-1304-4de9-883b-8fe8a4736ff4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/udipis-upahar-and-nalagandla-lingampally-hyderabad-615247",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "24637",
      name: "Domino's Pizza",
      cloudinaryImageId: "kjsu3ylzibdm8ytwe24u",
      locality: "Srilingampally",
      areaName: "Adarsh Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "24637",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-16 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0aebdd9-1304-4de9-883b-8fe8a4736ff4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-srilingampally-adarsh-nagar-hyderabad-24637",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "2804",
      name: "Shriji Rasoi",
      cloudinaryImageId: "rjojubngvtby3cjqx3jk",
      locality: "Serilingampally",
      areaName: "Anand Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "2804",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "852",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-16 22:50:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0aebdd9-1304-4de9-883b-8fe8a4736ff4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/shriji-rasoi-serilingampally-anand-nagar-hyderabad-2804",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "77671",
      name: "Homely",
      cloudinaryImageId: "wp2byr5zax7bic6bu6dc",
      locality: "TARANAGAR",
      areaName: "Serilingampally",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "North Indian",
        "South Indian",
        "Beverages",
        "Desserts",
        "Thalis",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "77671",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "4043",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-16 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "C",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0aebdd9-1304-4de9-883b-8fe8a4736ff4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/homely-taranagar-serilingampally-hyderabad-77671",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "413622",
      name: "The Spice Kitchen (Tsk)",
      cloudinaryImageId: "xmwg9zqvzjo2qjnfbvoa",
      locality: "Gopanapally",
      areaName: "Lingampally & Nalagandla",
      costForTwo: "₹300 for two",
      cuisines: [
        "Indian",
        "Seafood",
        "Snacks",
        "South Indian",
        "Chinese",
        "Hyderabadi",
        "Desserts",
        "Biryani",
        "Andhra",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "413622",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4700,
      },
      parentId: "214136",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-16 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0aebdd9-1304-4de9-883b-8fe8a4736ff4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-spice-kitchen-tsk-gopanapally-lingampally-and-nalagandla-hyderabad-413622",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "23278",
      name: "Biryanis And More",
      cloudinaryImageId: "zbkae5nheocnujju8ejv",
      locality: "chandanagar",
      areaName: "CHANDANAGAR",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Chinese", "Biryani"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "23278",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4700,
      },
      parentId: "2612",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-16 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0aebdd9-1304-4de9-883b-8fe8a4736ff4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/biryanis-and-more-chandanagar-hyderabad-23278",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "98965",
      name: "Parampara- 'The Mithai Shop'",
      cloudinaryImageId: "jbvegnqvrjvyefldytch",
      locality: "BHEL",
      areaName: "Lingampally & Nalagandla",
      costForTwo: "₹250 for two",
      cuisines: ["Sweets", "Desserts"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "98965",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "9908",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-16 20:01:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0aebdd9-1304-4de9-883b-8fe8a4736ff4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/parampara-the-mithai-shop-bhel-lingampally-and-nalagandla-hyderabad-98965",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "700848",
      name: "Khichdi Experment",
      cloudinaryImageId: "848837d6dc343f93a31a71775d48a929",
      locality: "Sivaji Nagar",
      areaName: "Chanda Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Beverages", "Snacks", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "700848",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "340268",
      avgRatingString: "4.3",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-17 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0aebdd9-1304-4de9-883b-8fe8a4736ff4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/khichdi-experment-sivaji-nagar-chanda-nagar-hyderabad-700848",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "166985",
      name: "B Bicha Reddy Sweets",
      cloudinaryImageId: "g6sismyp89b3qxz1zxlt",
      locality: "Ramachandra Puram",
      areaName: "Bharat Heavy Electricals Limited",
      costForTwo: "₹500 for two",
      cuisines: ["Sweets"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "166985",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "294292",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-16 21:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹65",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0aebdd9-1304-4de9-883b-8fe8a4736ff4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/b-bicha-reddy-sweets-ramachandra-puram-bharat-heavy-electricals-limited-hyderabad-166985",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Restro = ({ response }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    response;
  return (
    <div className="restroCard">
      <img
        className="restroLogo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="Error in loading Image"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="restroDetails">
        <span>{avgRating + "*"}</span>
        <span>{costForTwo}</span>
        <span>{sla.deliveryTime + " mins"}</span>
      </div>
    </div>
  );
};

const Body = () => {
  const resData = restroList;

  return (
    <div className="body">
      <div className="searchRestro">
        <input
          className="searchTxt"
          type="search"
          placeholder="Search restuarant by name"
        ></input>
        <input className="searchBtn" type="button" value="Search"></input>
      </div>
      <div className="restroContainer">
        {resData.map((res) => {
          return <Restro key={res.id} response={res.info} />;
        })}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="headerDiv">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://www.designevo.com/res/templates/thumb_small/simple-cup-crisp-cookie.png"
          alt="Failed to load the Image"
        ></img>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="appLayout">
      {/* Need to place header, body & footer Component  */}
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<AppLayout></AppLayout>);
