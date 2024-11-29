{pkgs, ...}: {
  packages = [pkgs.git pkgs.bun pkgs.nodejs];
  languages.typescript.enable = true;
}
