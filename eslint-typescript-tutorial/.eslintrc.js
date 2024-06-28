const { ESLint } = require("eslint");

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",//パーサーの設定
    plugins: ["@typescript-eslint"],//ルールの追加
    env:{
        browser: true,
        es2021: true,
    },
    parserOptions:{//パーサーオプション 
        ecmaVersion: "latest",
        sorceType:"module",
        project: "./tsconfig.eslint.json",//tsconfigRootDIrからの相対パス
        tsconfigRootDir:__dirname, //プロジェクトルートの絶対パス
    },
    ignorePatterns: ["dist"],
    extends:[ //shareable configを使うための設定。
        "airbnb-base",　//javascript向けのルール
        "airbnb-typescript/base",//拡張してタイプスクリプト向けに変更
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        //推奨ルールセット
    ],
    rules:{
        "import/prefer-default-export":"off",
        "@typescript-eslint/quotes":["error","doubble"],
    },
};