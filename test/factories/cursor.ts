import { Factory } from "fishery";
import casual from "casual";
import type { Cursor } from "types";

export default Factory.define<Cursor>(() => {
  return Buffer.from(casual.uuid).toString("base64");
});
