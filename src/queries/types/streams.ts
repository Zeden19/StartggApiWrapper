export type Streams = {
  id: string
  enabled: boolean
  followerCount: number
  isOnline: boolean
  numSetups: number
  parentStreamId: number
  streamGame: string
  streamId: string
  streamLogo: string
  streamName: string
  streamSource: StreamSource
  streamStatus: string
  streamType: number
  streamTypeId: number
}

type StreamSource = "TWITCH" | "HITBOX" | "STREAMME" | "MIXER" | "YOUTUBE"