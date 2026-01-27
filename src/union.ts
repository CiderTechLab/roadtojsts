/**
 * This funtion is for studying union types.
 * @param os {"windows", "linux", "macos"}
 */
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function selectOS(useOS: "windows" | "linux" | "macos"): string {
  let comment: string;

  switch (useOS) {
    case "windows":
      comment = "windows?他のOSが良いですよ！";
      break;
    case "linux":
      comment = "linux!素晴らしい選択です！";
      break;
    case "macos":
      comment = "macosを使っているんですね！おしゃれです！";
      console.log(comment);
      break;
    default:
      comment = "知らないOSですね。";
  }

  return comment;
}

selectOS(rl);
