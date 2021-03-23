module.exports = {
  globals: { // Глобальные переменные
    __DEV__: true
  },

  displayName: { // Будет выводиться перед запуском тестов
    name: 'CLIENT',
    color: 'blue'
  },

  // Количество ошибок, после которых прекращать выполнение тестов
  // По умолчанию - 0, то есть все тесты будут
  // выполнены и все ошибки будут выведены
  bail: 3,

  injectGlobals: true, // Импортировать хулпер-функции jest глобально
  clearMocks: true, // Очищать вызовы и экземпляры mock-объектов перед каждым тестом
  resetMocks: true, // Очищать состояние mock-объектов перед каждый тестом (jest.resetAllMocks())
  resetModules: true, // Изолированный запуск тестов для каждого модуля (jest.resetModules())
  errorOnDeprecated: true, // Показывать сообщения при вызове deprecated модулей

  globalSetup: '<rootDir>/src/jest.setup.js', // Глобальный Setup
  globalTeardown: '<rootDir>/src/jest.teardown.js', // Глобальный Teardown

  testMatch: [ // Поиск тестов по паттерну (Пример: ./tests/unit/MyComponent.test.js)
    '<rootDir>/tests/unit/**/?(*.)+(spec|test).[jt]s?(x)'
  ],

  moduleFileExtensions: [ // Расширения, которые используются
    'js',
    'json',
    'vue'
  ],

  transform: { // "Трансформеры" файлов
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest'
  },

  moduleNameMapper: { // Импорт модулей (Например, @/MyComponent.vue)
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  // Сбор информации о покрытии авто-тестами
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**']
}
