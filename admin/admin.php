<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- STYLE -->
    <link rel="stylesheet" href="/admin/admin.css">
    <title></title>
</head>

<body style="background: gray;">

    <h1>Gestion de projets</h1>

    <!-- Formulaire d'ajout -->
    <form id="add-form">
        <h2>Ajouter un projet</h2>

        <label for="add-name">Nom</label>
        <input type="text" id="add-name" name="name" required>

        <label for="add-link">Lien</label>
        <input type="text" id="add-link" name="link" required>

        <label for="add-img">Image</label>
        <input type="text" id="add-img" name="img" required>

        <label for="add-skills">Compétences</label>
        <input type="text" id="add-skills" name="skills" required>

        <button type="submit">Ajouter</button>
    </form>

    <!-- Tableau des projets -->
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Lien</th>
                <th>Image</th>
                <th>Compétences</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="projects-table">
            <!-- Les projets seront ajoutés ici -->
            <tr>
                <td>Projet 1</td>
                <td>http://example.com</td>
                <td>http://example.com/image.jpg</td>
                <td>Compétence 1, Compétence 2</td>
                <td>
                    <button class="edit-button">Modifier</button>
                    <button class="delete-button">Supprimer</button>
                </td>
            </tr>
            <tr>
                <td>Projet 2</td>
                <td>http://example.com</td>
                <td>http://example.com/image.jpg</td>
                <td>Compétence 3, Compétence 4</td>
                <td>
                    <button class="edit-button">Modifier</button>
                    <button class="delete-button">Supprimer</button>
                </td>
            </tr>
        </tbody>
    </table>

    <!-- Formulaire de modification -->
    <form id="edit-form">
        <h2>Modifier un projet</h2>

        <label for="edit-name">Nom</label>
        <input type="text" id="edit-name" name="name" required>

        <label for="edit-link">Lien</label>
        <input type="text" id="edit-link" name="link" required>

        <label for="edit-img">Image</label>
        <input type="text" id="edit-img" name="img" required>

        <label for="edit-skills">Compétences</label>
        <input type="text" id="edit-skills" name="skills" required>

        <input type="hidden" id="edit-index" name="index">
        <button type="submit">Modifier</button>
    </form>

</body>

</html>