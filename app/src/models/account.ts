import { IEmail } from './email'

/** The data-only interface for User for transport across IPC. */
export interface IAccount {
  readonly token: string
  readonly login: string
  readonly endpoint: string
  readonly emails: ReadonlyArray<IEmail>
  readonly avatarURL: string
  readonly id: number
  readonly name: string
}

/**
 * A GitHub user.
 */
export class Account implements IAccount {
  public readonly token: string
  public readonly login: string
  public readonly endpoint: string
  public readonly emails: ReadonlyArray<IEmail>
  public readonly avatarURL: string
  public readonly id: number
  public readonly name: string

  /** Create a new User from some JSON. */
  public static fromJSON(obj: IAccount): Account {
    return new Account(obj.login, obj.endpoint, obj.token, obj.emails, obj.avatarURL, obj.id, obj.name)
  }

  public constructor(login: string, endpoint: string, token: string, emails: ReadonlyArray<IEmail>, avatarURL: string, id: number, name: string) {
    this.login = login
    this.endpoint = endpoint
    this.token = token
    this.emails = emails
    this.avatarURL = avatarURL
    this.id = id
    this.name = name
  }

  public withToken(token: string): Account {
    return new Account(this.login, this.endpoint, token, this.emails, this.avatarURL, this.id, this.name)
  }
}
