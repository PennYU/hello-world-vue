export interface Terminal {
  host: string,
  port: number,
  username: string,
  password: string,
}

export interface CmakeProject {
  sourceDir: string,
  configurePreset: string,
  buildPreset: string,
  testPreset: string,
}

export interface Qemu {
  host: string,
}