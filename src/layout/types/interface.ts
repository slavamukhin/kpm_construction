import { ReactElement } from "react";
import { ContentPosition } from "./enum";


export interface BlockProps {
  children: ReactElement
  contentPosition: ContentPosition
  backgroundColor?: string
  backgroundUrl?: string
  header?: boolean
  backgroundPosition?: string
}

export type ContentProps = Pick<BlockProps, 'children' | 'contentPosition'>