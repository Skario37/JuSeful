function log   (...content)  { this.logType(content, "log")    }

function error (...args)     { this.logType(args, "error")  }

function warn  (...args)     { this.logType(args, "warn")   }

function debug (...args)     { this.logType(args, "debug")  }

function cmd   (...args)     { this.logType(args, "cmd")    }

function ready   (...args)     { this.logType(args, "ready")    }

function logType(content, type = "log") {
  let cssReset = {
    "color": __color_hex.FgBlack,
    "bg_color": __color_hex.BgWhite,
  }
  let css = {
    "color": __color_hex.FgBlack,
    "bg_color": __color_hex.BgWhite,
  }
  content = content.join(' ')
  const utcDate = new Date().toUTCString()
  switch (type) {
    case "log": break // Using default css
    case "cmd": break // Using default css
    case "warn": {
      css.bg_color = __color_hex.BgYellow
    }
    break
    case "error": {
      css.bg_color = __color_hex.BgRed
    }
    break
    case "debug": {
      css.color = __color_hex.FgGreen
    }
    break
    case "ready": {
      css.bg_color = __color_hex.BgGreen
    }
    break
    default: throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");
  }
  return console.log(
    `[${utcDate}] %c[${type}]%c : ${content}`,
    `color:${css.color}; background-color:${css.bg_color};`,
    `color:${cssReset.color}; background-color:${cssReset.bg_color};`
  );
}