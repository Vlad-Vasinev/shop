const theme = {

    colorPrimaryLight: "#1D1D1D",
    colorSecondaryLight: "#8C8C8C",
    backgroundLight: "#E5E5E5",
    whiteLight: "#ffffff",
    pinkColor: "#FBE0DC",

    colorPrimaryDark: "#ffffff",
    colorSecondaryDark: "#8C8C8C",
    backgroundDark: "#1D1D1D",
    backgroundSecondaryDark: "#282828",
    rgbGreyDark: "rgba(255, 255, 255, 0.1)",
    rgbpinkDark: "rgba(255, 134, 142, 0.2)",

    themeColorPrimary: "",
    themeColorSecondary: "",
    themeBackgroundColor: "",
    themeBackgroundNav: "",
    homeImgBg: "",
    btnBackBG: "",
    customBg: "",

}

const THEME_CHANGE_LIGHT = "THEME_CHANGE_LIGHT";
const THEME_CHANGE_DARK = "THEME_CHANGE_DARK";

export const ThemeReducer = (state = theme, action) => {
    switch (action.type) {
        case THEME_CHANGE_LIGHT:
            console.log('hihihih theme change light')

            return {
                ...state,
                themeColorPrimary: state.colorPrimaryLight,
                themeColorSecondary: state.colorSecondaryLight,
                themeBackgroundColor: state.backgroundLight,
                themeBackgroundNav: state.whiteLight,
                homeImgBg: state.pinkColor,
                btnBackBG: state.pinkColor,
                customBg: state.whiteLight,
            }

        case THEME_CHANGE_DARK:

            return {
                ...state,
                themeColorPrimary: state.colorPrimaryDark,
                themeColorSecondary: state.colorSecondaryDark,
                themeBackgroundColor: state.backgroundDark,
                themeBackgroundNav: state.rgbGreyDark,
                homeImgBg: state.backgroundSecondaryDark,
                btnBackBG: state.rgbpinkDark,
                customBg: state.backgroundSecondaryDark,
            }

        default:
            return {
                ...state,
                themeColorPrimary: state.colorPrimaryLight,
                themeColorSecondary: state.colorSecondaryLight,
                themeBackgroundColor: state.backgroundLight,
                themeBackgroundNav: state.whiteLight,
                homeImgBg: state.pinkColor,
                btnBackBG: state.pinkColor,
                customBg: state.whiteLight,
            }
    }
}

export const themeLightCreator = (payload) => {
    return { type: "THEME_CHANGE_LIGHT", payload }
}

export const themeDarkCreator = (payload) => {
    return { type: "THEME_CHANGE_DARK", payload }
}