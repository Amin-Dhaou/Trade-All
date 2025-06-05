# Trade-All

**Trade-All** est une plateforme en ligne dédiée à l’échange, à l’achat et à la vente de produits électroniques.  
Elle permet aux utilisateurs de publier des annonces, de rechercher des articles, et d’effectuer des transactions en toute sécurité.

---

## 🚀 Technologies utilisées

| Côté           | Technologie       |
|----------------|-------------------|
| Frontend       | Angular 17.1.0    |
| Backend        | Spring Boot       |
| Base de données| MySQL             |

---

## 🧩 Fonctionnalités principales

- 🛒 **Catalogue de produits** : Parcourez une large sélection d’articles électroniques.
- 🔍 **Recherche avancée** : Filtrage par catégorie, prix et état.
- 🔐 **Authentification** : Enregistrement, connexion et déconnexion des utilisateurs.
- 👤 **Espace utilisateur** : Gestion des annonces et suivi des échanges.

---

## 📂 Structure du projet

Fonctionnalités principales : Catalogue de produits : Parcourez une large sélection d'articles électroniques. Recherche avancée : Trouvez rapidement les produits en fonction de vos critères (catégorie, prix, état). Échange sécurisé : Système d'échange avec suivi et notifications en temps réel. Gestion des utilisateurs : Créez un compte, gérez vos annonces et suivez vos transactions. Technologies utilisées : Frontend : Angular pour une interface utilisateur dynamique et réactive. Backend : Spring Boot pour une architecture robuste et performante. Base de données : MySQL pour la gestion des données. Trade-All simplifie les transactions électroniques en ligne tout en mettant l'accent sur la transparence et la sécurité.

---

## Angular Frontend (v17.1.0)

**Development server**  
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

**Install dependencies**  
Run `npm install` inside the `frontend` folder.

**Code scaffolding**  
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

**Build**  
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


**Further help**  
Use `ng help` or visit the Angular CLI [documentation](https://angular.io/cli) for more information.

## Spring Boot Backend

**Start server**  
Inside the `backend` folder, run `./mvnw spring-boot:run` to start the backend.

**Build project**  
Run `./mvnw clean install` to build the project and download dependencies.

**Create JAR**  
Run `./mvnw package` to generate a `.jar` file in the `target/` directory.

**Run JAR**  
Run `java -jar target/your-project.jar` to start the application from the JAR.

**Run tests**  
Run `./mvnw test` to execute unit tests.

**MySQL Configuration** (in `application.properties`):
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/tradeall
spring.datasource.username=yourUsername
spring.datasource.password=yourPassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

