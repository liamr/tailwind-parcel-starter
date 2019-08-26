// Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L5

const Color = require("color");

const defaultTheme = require("tailwindcss/defaultTheme");

var colors = {
  cyan: "#9cdbff",

  theme: {
    100: "#f0fff4",
    200: "#c6f6d5",
    300: "#9ae6b4",
    400: "#68d391",
    500: "#48bb78",
    600: "#38a169",
    700: "#2f855a",
    800: "#276749",
    900: "#22543d"
  }
};

module.exports = {
  theme: {
    fontFamily: {
      display: ["DM Sans", "sans-serif"],
      body: ["DM Sans", "sans-serif"],
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: colors,
      opacity: {
        "90": ".9"
      }
    }
  },
  variants: { opacity: ["responsive", "hover", "focus"] },
  plugins: [
    require("tailwindcss-spinner")({
      name: "spinner", // change class name
      color: "#dae1e7", // color you want to make the spinner
      size: "1em", // size of the spinner (used for both width and height)
      border: "2px" // border-width of the spinner (shouldn't be bigger than half the spinner's size)
    }),
    function({ addComponents }) {
      const buttons = {
        ".btns": {
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          "&:last-child": {
            marginBottom: "-.5rem"
          },
          ".btn": {
            marginBottom: "0.5rem"
          }
        },
        ".btn": {
          cursor: "pointer",
          padding: ".5rem 1rem",
          justifyContent: "center",
          alignItems: "center",
          border: `1px solid ${Color(colors.theme[200])}`,
          borderRadius: ".25rem",
          fontWeight: "400",
          display: "inline-flex",
          lineHeight: "1.25",
          fontSize: "1rem",
          textDecoration: "none",
          whiteSpace: "nowrap",
          "&:hover": {
            backgroundColor: Color(`${colors.theme[200]}`)
              //.darken(0.1)
              .hex()
              .toString(),
            color: `${colors.theme[700]}`
          },
          "&[disabled]": {
            opacity: 0.7,
            cursor: "default",
            pointerEvents: "none"
          },
          "&:not(:last-child):not(.is-fullwidth)": {
            marginRight: "0.5rem"
          }
        },
        ".btn-primary": {
          borderColor: "transparent",
          backgroundColor: `${colors.theme[700]}`,
          color: "#fff",
          "&:hover": {
            backgroundColor: Color(`${colors.theme[700]}`)
              .darken(0.1)
              .hex()
              .toString(),
            color: "#fff"
          },
          "&:focus": {
            outline: 0,
            boxShadow: `0 0 0 .2em ${Color(`${colors.theme[700]}`)
              .alpha(0.5)
              .rgb()
              .toString()}`
          },
          "&:active": {
            backgroundColor: Color(`${colors.theme[700]}`)
              .darken(0.3)
              .hex()
              .toString()
          }
        },
        ".btn-secondary": {
          borderColor: "transparent",
          backgroundColor: `${colors.theme[300]}`,
          color: `${colors.theme[600]}`,
          "&:hover": {
            backgroundColor: Color(`${colors.theme[300]}`)
              .darken(0.05)
              .hex()
              .toString(),
            color: `${colors.theme[800]}`
          },
          "&:focus": {
            outline: 0,
            boxShadow: `0 0 0 .2em ${Color(`${colors.theme[300]}`)
              .alpha(0.5)
              .rgb()
              .toString()}`
          },
          "&:active": {
            backgroundColor: Color(`${colors.theme[300]}`)
              .darken(0.3)
              .hex()
              .toString()
          }
        },
        ".btn-sm": {
          fontSize: ".75rem",
          padding: ".5rem .75rem"
        },
        ".btn-lg": {
          fontSize: "1.15rem",
          padding: ".75rem 1.5rem"
        }
      };

      addComponents(buttons);
    },
    function({ addComponents }) {
      const notifications = {
        ".notification": {
          display: "flex",
          "background-color": `${defaultTheme.colors.gray[200]}`,
          "alugn-items": "center",
          "font-weight": "600",
          padding: ".75rem 1rem",
          color: `${defaultTheme.colors.gray[900]}`,
          "font-size": "0.875rem",
          "border-radius": "0.25rem",
          "&:not(:last-child)": {
            "margin-bottom": "1rem"
          },
          ".icon": {
            width: "1rem",
            height: "1rem",
            fill: "currentColor",
            "margin-top": "0.2rem",
            "margin-right": "0.5rem"
          }
        },
        ".notification-info": {
          backgroundColor: `${defaultTheme.colors.blue[300]}`,
          color: "#fff"
        },
        ".notification-success": {
          backgroundColor: `${defaultTheme.colors.green[400]}`,
          color: "#fff"
        },
        ".notification-warning": {
          backgroundColor: `${defaultTheme.colors.orange[500]}`,
          color: "#fff"
        },
        ".notification-danger": {
          backgroundColor: `${defaultTheme.colors.red[600]}`,
          color: "#fff"
        }
      };

      addComponents(notifications);
    },
    function({ addComponents }) {
      const content = {
        ".content": {
          "h1, h2, h3, h4, h5, h6": {
            "font-size": "100%",
            "font-weight": "600",
            "line-height": "1.125"
          },
          h1: {
            "font-size": "2em",
            "margin-bottom": ".5em",
            "&:not(:first-child)": {
              "margin-top": "1em"
            }
          },
          h2: {
            "font-size": "1.75em",
            "margin-bottom": ".5714em;",
            "&:not(:first-child)": {
              "margin-top": "1.1428em"
            }
          },
          h3: {
            "font-size": "1.5em",
            "margin-bottom": ".6666em",
            "&:not(:first-child)": {
              "margin-top": "1.3333em"
            }
          },
          h4: {
            "font-size": "1.25em",
            "margin-bottom": ".8em"
          },
          h5: {
            "font-size": "1.125em",
            "margin-bottom": ".8888em"
          },
          h6: {
            "font-size": "1em",
            "margin-bottom": "1em"
          },
          p: {
            "&:not(:last-child)": {
              "margin-bottom": "1em"
            }
          }
        },
        ".is-small": {
          fontSize: `.75rem`
        },
        ".is-medium": {
          fontSize: `1.25rem`
        },
        ".is-large": {
          fontSize: `1.5rem`
        }
      };

      addComponents(content);
    }
  ]
};
