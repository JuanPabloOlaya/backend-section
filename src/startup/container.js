const { createContainer, asValue, asClass, asFunction } = require("awilix");

// Config
const config = require("../config");
const app = require(".");

// Services
const {
  HomeService,
  UserService,
  IdeaService,
  CommentService,
} = require("../services");

// Controllers
const { HomeController } = require("../controllers");

// Routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

// Models
const { User, Comment, Idea } = require("../models");

// Repositories
const {
  UserRepository,
  IdeaRepository,
  CommentRepository,
} = require("../repositories");

const container = createContainer();

container
  // Configuración
  .register({
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    app: asClass(app).singleton(),
  })
  // Servicios
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
  })
  // Controladores
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  // Rutas
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  // Modelos
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  // Repositorios
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  });

module.exports = container;
