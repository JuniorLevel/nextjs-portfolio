class AppRoutes {
  private readonly rootPath = '/';
  public WELCOME = this.rootPath;
  public DASHBOARD = `${this.rootPath}dashboard`;
  public ABOUT = `${this.rootPath}about`;
  public PROJECTS = `${this.rootPath}projects`;
  public CONTACTS = `${this.rootPath}contacts`;
}

export const appRoutes = new AppRoutes();
