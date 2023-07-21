"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    overwrite: true,
    schema: "./Tensor-Trade-API@current.graphql",
    generates: {
        "src/generated/graphql.ts": {
            plugins: ["typescript"]
        }
    }
};
exports.default = config;
