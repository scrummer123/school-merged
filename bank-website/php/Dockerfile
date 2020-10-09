FROM php:7.4.2-fpm-alpine3.11

RUN docker-php-ext-install pdo pdo_mysql

EXPOSE 9000

CMD ["php-fpm"]