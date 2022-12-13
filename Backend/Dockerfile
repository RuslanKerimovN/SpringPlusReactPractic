FROM maven:3.8.6-openjdk-18-slim AS MAVEN_BUILD
WORKDIR /build/
COPY pom.xml /build/
COPY src /build/src
RUN mvn clean install -DskipTests

FROM openjdk:18.0.2-oracle
WORKDIR /usr/app/back
COPY --from=MAVEN_BUILD /build/target/*.jar ./server.jar
#ARG JAR_FILE=target/*.jar
#COPY ${JAR_FILE} ./server.jar
CMD ["java", "-jar", "/usr/app/back/server.jar"]