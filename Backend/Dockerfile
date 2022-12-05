FROM openjdk:18.0.2-oracle
WORKDIR /usr/app/back
COPY ./ ./
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} ./server.jar
CMD ["java", "-jar", "/usr/app/back/server.jar"]