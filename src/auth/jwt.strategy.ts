import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from Bearer header
      secretOrKey: configService.get<string>('jwt.accessSecret'), // Secret to validate signature
      ignoreExpiration: false, // Reject expired tokens
    });
  }

  async validate(payload: any) {
    // This method is called if the JWT is valid.
    // You can attach any info you want to the request object here (e.g., user id).
    // The returned object will be assigned to req.user.
    return { userId: payload.sub, username: payload.username };
  }
}
