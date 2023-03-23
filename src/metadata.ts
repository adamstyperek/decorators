export class Metadata {
  constructor() {
    this.labels = new Map<string, string>();
  }
  id: string;
  user: UserMetadata;
  createdAt: Date;
  labels: Map<string, string>;
}

export class UserMetadata {
  id: string;
  email: string;
  name: string;
}
