import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://wardalsultan96:H1wz8RMpAIx2IjFE@cluster0.r2sp8ph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
