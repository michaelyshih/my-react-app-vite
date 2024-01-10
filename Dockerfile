FROM oven/bun:latest

WORKDIR /home/bun/app

# demo
COPY ./package.json .
RUN bun install
COPY . .
CMD [ "bun", "run", "dev" ]

# # install dependencies into temp directory
# # this will cache them and speed up future builds
# FROM base AS install
# RUN mkdir -p /temp/dev
# COPY package.json bun.lockb /temp/dev/
# RUN cd /temp/dev && bun install --frozen-lockfile

# # install with --production (exclude devDependencies)
# RUN mkdir -p /temp/prod
# COPY package.json bun.lockb /temp/prod/
# RUN cd /temp/prod && bun install --frozen-lockfile --production

# # copy node_modules from temp directory
# # then copy all (non-ignored) project files into the image
# FROM base AS prerelease
# COPY --from=install /temp/dev/node_modules node_modules
# COPY . .

# # [optional] tests & build
# ENV NODE_ENV=production
# RUN bun test
# RUN bun run build

# # copy production dependencies and source code into final image
# FROM base AS release
# COPY --from=install /temp/prod/node_modules node_modules
# # COPY --from=prerelease /home/bun/app/index.ts .
# COPY --from=prerelease /home/bun/app/package.json .

# run the app
# USER bun
# EXPOSE 8000/tcp
# ENTRYPOINT [ "bun", "run", "build" ]
