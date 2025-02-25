import { Flex } from "antd";
import { DictSelect, DictSpan } from ".";

export default () => <Flex gap={16}>
  <DictSelect code="select" style={{ width: 120 }} />
  <DictSpan code="select" value="1" />
</Flex>;