FROM mcr.microsoft.com/dotnet/core/sdk:3.1
COPY . /MapandReduceApi
WORKDIR /MapandReduceApi
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
EXPOSE 80/tcp
RUN chmod +x ./entrypoint.sh
CMD /bin/bash ./entrypoint.sh