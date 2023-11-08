# Test

### Create new workspace
ng new test --package-manager yarn --ssr --style scss --strict --create-application false --new-project-root projects/libs --skip-install

## Create new application
ng g application my-app --ssr --style scss --prefix app --routing --project-root projects/apps/my-app --dry-run

## Create Layout Library
ng g library layout --entry-file index --prefix layout --skip-install --dry-run
- remove or adjust created compoment and service
- add path "projects/libs/layout/src" to tsconfig.json

## Create Component inside Library
ng g c sidenav --project layout
