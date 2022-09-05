Backend end prepare:

--------------------------------------

1) Kindly change .env.example to .env & put db configuration
2) composer install (by composer.json)
3) sudo chmod -R 777 storage
4) php artisan migrate
5) php artisan passport:install
6) php artisan db:seed --class=ModuleSeeder
7) php artisan db:seed --class=RoleSeeder
8) php artisan db:seed --class=ModuleRoleSeeder
9) php artisan db:seed --class=OrganisationSeeder
10) php artisan db:seed --class=AdminSeeder (credentials are here)

11) All APi routes are defined in the api.php

--------------------------------------

Front end (Vue based SPA):
--------------------------------------
Optional commands. Not necessary

1) Kindly ensure node > 18.0.1 and npm 6
1) npm i --legacy-peer-deps (Make node_modules from package.json)
2) npm audit fix --force (make 0 vulnerabilies)
3) sudo sysctl -w fs.inotify.max_user_watches=9999999 (If watcher errors)
4) optional commands:
    sudo npm install -g sass-migrator
    sass-migrator division **/*.scss
    (To migrate from deprecated version of scss [Using / for division outside of calc() is deprecated])

---------------------------------------

Integration:
--------------------------------------
Backend:
1) make ensure base path with api  

Front End: 
1) Already dist generated. Kindly find & replace base_url at public state "http://localhost/MyApp/passport/apis/"
    in dist/js/app.b74e88a4.js in root folder 

--------------------------------------