
export function log        (...args)   { logType(args, "log"); }

export function error      (...args)   { logType(args, "error"); }

export function warn       (...args)   { logType(args, "warn"); }

export function debug      (...args)   { logType(args, "debug"); }

export function cmd        (...args)   { logType(args, "cmd"); }

export function ready      (...args)   { logType(args, "ready"); }

export function count      (...args)   { logType(args, "count"); }

export function countReset (...args)   { logType(args, "countReset"); }

export function dir        (...args)   { logType(args, "dir"); }

export function dirxml     (...args)   { logType(args, "dirxml"); }

export function group      (...args)   { logType(args, "group"); }

export function groupCollapsed     (...args)   { logType(args, "groupCollapsed"); }

export function groupEnd   (...args)   { logType(args, "groupEnd"); }

export function table      (...args)   { logType(args, "table"); }

export function time       (...args)   { logType(args, "time"); }

export function timeEnd    (...args)   { logType(args, "timeEnd"); }

export function timeLog    (...args)   { logType(args, "timeLog"); }

export function trace      (...args)   { logType(args, "trace"); }



function logType(content, type = "log") {
  let css = {
    "color": "none",
    "bg_color": "none",
  };
  if (type !== "table") {
    content.length === 1 ? content = content[0] : content = content.join(' ');
  }
  const utcDate = new Date().toUTCString();
  switch (type) {
    // Using default css or not at all
    case "log":
    case "cmd":
    case "error":
    case "warn":
    case "count":
    case "countReset":
    case "dir":
    case "dirxml":
    case "group":
    case "groupCollapsed":
    case "groupEnd":
    case "table":
    case "time":
    case "timeEnd":
    case "trace":
      break;

    // Using custom css
    case "debug": {
      css.color = __color_hex.FgGreen;
    }
    break;
    case "ready": {
      css.bg_color = __color_hex.BgGreen;
    }
    break;
    default: throw new TypeError(`Type ${type} is not supported.`);
  }

  switch (type) {
    // Non standard methodes
    case "cmd":
    case "ready":
      return console.log(
        `%c[${utcDate}] [${type}] :`,
        `color:${css.color}; background-color:${css.bg_color};`,
        content
      );

    // Standard methodes
    case "count":
    case "countReset":
    case "dir":
    case "dirxml":
    case "table":
    case "time":
    case "timeEnd":
    case "timeLog":
      return console[type](content);
    case "group":
    case "groupCollapsed":
    case "groupEnd":
    case "trace":
      return console[type]();
    default:
      return console[type](
        `%c[${utcDate}] [${type}] :`,
        `color:${css.color}; background-color:${css.bg_color};`,
        content
      );
  }
}